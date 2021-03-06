class FavoriteBlogsController < ApplicationController
  before_action :set_favorite_blog, only: [:index, :show, :edit, :update, :destroy]

  # GET /favorite_blogs
  # GET /favorite_blogs.json
  def index
    render json: @favorite_blog
  end

  # GET /favorite_blogs/1
  # GET /favorite_blogs/1.json
  def show
    render json: @favorite_blog
  end

  # GET /favorite_blogs/new
  def new
    @favorite_blog = FavoriteBlog.new
  end

  # GET /favorite_blogs/1/edit
  def edit
  end

  # POST /favorite_blogs
  # POST /favorite_blogs.json
  def create
    @favorite_blog = FavoriteBlog.new(favorite_blog_params)

    respond_to do |format|
      if @favorite_blog.save
        format.html { redirect_to @favorite_blog, notice: 'FavoriteBlog was successfully created.' }
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
      render json:FavoriteBlog.all
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite_blog
      @user = current_user.id
      @favorite_blog = FavoriteBlog.find_by_user_id(@user)
    end

    # Only allow a list of trusted parameters through.
    def favorite_blog_params
      params.require(:favorite_blog).permit(:id,
                                            :fav_blogs,
                                            :user_id,
                                            :created_at,
                                            :updated_at)
    end
end
