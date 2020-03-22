class Api::V1::UsersController < ApplicationController

  # def index
  #   @users = User.all
  #   render json: @users, status: 200 # you've got a serializer. Maybe you should use it.
  # end

  def show
    @user = User.find(params[:id])
    render json: @user, status: 200
  end


  def create
  #Set user object attributes using strong parameters
    @user = User.new(user_params)

  #Attempt to save @user
    if @user.save
      render json: @user, status: 200
    else
    #Saving failed, we can inspect @user.errors for more information
      flash[:alert] = 'Registration invalid. Submit a unique username and a password.'

    #If using a form library @user.errors will be displayed graphically when rendering the :new action
    end
  end




  # def create
  #   @user = User.new(user_params)
  #     @user.save!

  # def create
  #   @user = User.create(user_params)
  #   render json: @user, status: 200
  # end

#   def update
#     @user = User.find(params[:id])
# # 403 is an unauthorized error
#     # return render json: {error: 'Unauthorized'}, status: 403 unless @user.user == current_user
#     @user.update(user_params)
#     render json: @user, status: 200
#   end


# -    return json: {error: 'Unauthorized'}, status: 403 unless @user.user == current_user
# +    return render json: {error: 'Unauthorized'}, status: 403 unless @user.user == current_user


#   def destroy
#     @user = User.find(params[:id])
# # 403 is an unauthorized error
#     # return render json: {error: 'Unauthorized'}, status: 403 unless @user.user == current_user
#     @user.delete
#     render json: {userId: user.id}
#   end


  private
  def user_params
    params.require(:user).permit(:username, :password)
    # params.require(:user).permit(:title, :body, :outcome, :amens).merge({user_id: current_user.id})
  end

end






  # def profile # bear in mind that Application Controller calls #authorized before any other controller methods are called. So if authorization fails, #profile will never be called; instead there will be: "render json: {message: 'Please log in'}, status: unauthorized".
  #   # THAT'S IT FOR THE SERVER!
  #   render json: {user: UserSerializer.new(current_user) }, status: :accepted
  # end
  #
  # def create
  #   @user = User.create(user_params)
  #   if @user.valid?
  #     @token = encode_token({user_id: @user.id})
  #     render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created #instead of "200".
  #   else
  #     render json: { error: 'failed to create user'}, status: :not_acceptable # instead of "500".
  #   end
  # end
  #
  # private
  # def user_params
  #   params.require(:user).permit(:username, :password)
  # end

# end
