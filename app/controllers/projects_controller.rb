class ProjectsController < ApplicationController
  before_action :set_projects, only: [:show, :edit, :update, :destroy]

  # GET /projectss
  # GET /projectss.json
  def index
    @projectss = Projects.all
    render json: @projectss
  end

  # GET /projectss/1
  # GET /projectss/1.json
  def show
    render json: @projects
  end

  # GET /projectss/new
  def new
    @projects = projects.new
  end

  # GET /projectss/1/edit
  def edit
  end

  # POST /projectss
  # POST /projectss.json
  def create
    @projects = projects.new(projects_params)

    respond_to do |format|
      if @projects.save
        format.json { render :show, status: :created, location: @projects }
      else
        format.html { render :new }
        format.json { render json: @projects.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projectss/1
  # PATCH/PUT /projectss/1.json
  def update
    @projects.update(projects_params)
    if @projects.valid?
      render json: @projects
    end
  end

  # DELETE /projectss/1
  # DELETE /projectss/1.json
  def destroy
    @projects.destroy
      render json:Projects.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_projects
      @projects = projects.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def projects_params
      params.require(:projects).permit(:title, 
                                        :description, 
                                        :user_id, 
                                        :id, 
                                        :position, 
                                        :created_at, 
                                        :updated_at)
    end
end
