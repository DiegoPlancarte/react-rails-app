class FavoriteBlogsController < ApplicationController
  before_action :set_favorite_blog, only: [:show, :edit, :update, :destroy]

  # GET /favorite_blogs
  # GET /favorite_blogs.json
  def index
    @favorite_blogs = FavproteBlog.all
    render json: @favorite_blogs
  end

  # GET /favorite_blogs/1
  # GET /favorite_blogs/1.json
  def show
    render json: @favorite_blog
  end

  # GET /favorite_blogs/new
  def new
    @favorite_blog = FavproteBlog.new
  end

  # GET /favorite_blogs/1/edit
  def edit
  end

  # POST /favorite_blogs
  # POST /favorite_blogs.json
  def create
    @favorite_blog = FavproteBlog.new(favorite_blog_params)

    respond_to do |format|
      if @favorite_blog.save
        format.html { redirect_to @favorite_blog, notice: 'FavproteBlog was successfully created.' }
        format.json { render :show, status: :created, location: @favorite_blog }
      else
        format.html { render :new }
        format.json { render json: @favorite_blog.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /favorite_blogs/1
  # PATCH/PUT /favorite_blogs/1.json
  def update
    @favorite_blog.update(favorite_blog_params)
    if @favorite_blog.valid?
      render json: @favorite_blog
    end
  end

  # DELETE /favorite_blogs/1
  # DELETE /favorite_blogs/1.json
  def destroy
    @favorite_blog.destroy
      render json:FavproteBlog.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_blog
      @favorite_blog = FavproteBlog.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_blog_params
      params.require(:favorite_blog).permit(:fav_blogs, 
                                            :user_id)
    end
end
