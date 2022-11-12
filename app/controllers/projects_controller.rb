class ProjectsController < ApplicationController
    def index
        projects = Project.all
        render json: projects
    end

    def show
        project = Project.find_by(id: params[:id])
        if project
            render json: project
        end
    end

    def create
        current_user = User.find_by(id:session[:user_id])
        if current_user
            project = current_user.projects.create!(project_params)
            render json: project
        else
            render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
    end

    def update
        current_user = User.find_by(id:session[:user_id])
        project = user.projects.find_by(id: params[:id])
        if project
            project.update(project_params)
            render json: project, status: :accepted
        else
            render json: {error: 'Project Not Found'}, status: :not_found
        end
    end

    def destroy
        current_user =  User.find_by(id: session[:user_id])
        project = user.projects.find_by(id: params[:id])
        if project
            project.destroy
            render json: {}
        else
            render json: {error: 'Project Not Found'}, status: :not_found
        end
    end

    private

    def project_params
        params.permit(:title, :description, :photo_url1, :photo_url2, :photo_url3, :photo_url4, :video_url) 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end

end
