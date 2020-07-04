class Api::ReviewsController < ApplicationController 
    before_action :ensure_logged_in!

    def index 
        if params[:spot_id]
            @reviews = Review.where(spot_id: params[:spotId].includes(:guest))
        else
            @reviews = Review.all
        end
        render :index
    end

    def create
        @review = current_user.reviews.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    private
    
    def review_params
        params.require(:review).permit(:body, :rating, :guest_id, :spot_id)
    end
end