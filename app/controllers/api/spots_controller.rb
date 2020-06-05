class Api::SpotsController < ApplicationController
    def index 
        @spots = Spot.all 
        render :index
    end

    def show
        @spot = Spot.find(params[:id])
        render :show 
    end

    def create
        @spot = Spot.new(spot_params)
        if @spot.save 
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    def update 
        @spot = Spot.find(params[:id])
        if @spot && @spot.update(spot_params)
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    private

    def spot_params 
        params.require(:spot).permit(:price, :city, :lat, :lng, :description, :title, :spot_type)
    end

end