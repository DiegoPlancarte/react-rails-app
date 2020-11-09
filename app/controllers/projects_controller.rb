class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
    render json: @projects
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    render json: @project
  end

  # GET /projects/new
  def new
    @project = projects.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(projects_params)

    respond_to do |format|
      if @project.save
        format.json { render :show, status: :created, location: @projects }
      else
        format.html { render :new }
        format.json { render json: @projects.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @project.update(projects_params)
    if @project.valid?
      render json: @project
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
      render json:Project.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def projects_params
      params.require(:project).permit(:title, 
                                        :description, 
                                        :user_id,
                                        :position,
                                        :id,
                                        :created_at,
                                        :updated_at,)
    end
end
