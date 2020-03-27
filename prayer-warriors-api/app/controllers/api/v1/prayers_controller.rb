class Api::V1::PrayersController < ApplicationController

  def index
    @prayers = Prayer.all
    render json: @prayers, status: 200 # you've got a serializer. Maybe you should use it.
  end

  # def show
  #   @prayer = Prayer.find(params[:id])
  #   render json: @prayer, status: 200
  # end

  def create
    @prayer = Prayer.new(prayer_params)
    if @prayer.save
      render json: @prayer, status: 200
    else
      render json: {error: 'Unable to create prayer.'}, status: 400
    end
  end


  # def create
  # #Set user object attributes using strong parameters
  #   @user = User.new(user_params)
  # #Attempt to save @user
  #   if @user.save
  #     render json: @user, status: 200
  #   else
  #   #Saving failed, we can inspect @user.errors for more information
  #     render json: {error: 'Unable to create user.'}, status: 400
  #   #If using a form library @user.errors will be displayed graphically when rendering the :new action
  #   end
  # end



  def update
    @prayer = Prayer.find(params[:id])
    if @prayer.update(prayer_params)
      render json: @prayer, status: 200
    else
      render json: {error: 'Unable to edit prayer.'}, status: 400
    end
  end
  # 403 is an unauthorized error
      # return render json: {error: 'Unauthorized'}, status: 403 unless @prayer.user == current_user


# -    return json: {error: 'Unauthorized'}, status: 403 unless @prayer.user == current_user
# +    return render json: {error: 'Unauthorized'}, status: 403 unless @prayer.user == current_user


#   def destroy
#     @prayer = Prayer.find(params[:id])
# # 403 is an unauthorized error
#     # return render json: {error: 'Unauthorized'}, status: 403 unless @prayer.user == current_user
#     @prayer.delete
#     render json: {prayerId: prayer.id}
#   end


  private
  def prayer_params
    params.require(:prayer).permit(:title, :body, :outcome, :amens, :user_id)
    # params.require(:prayer).permit(:title, :body, :outcome, :amens).merge({user_id: current_user.id})
  end

end
