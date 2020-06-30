class Api::BookingsController < ApplicationController
    before_action :ensure_logged_in!
    def index
        @bookings = if params[:user_id]
        Booking.includes(:spot).where(guest_id: params[:user_id])
        else
            Booking.includes(:spot).all
        end
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        if @booking
            render :show
        else
            render json: @booking.errors.full_messages, status: 404
        end
    end

    def create
        @booking = Booking.new(booking_params)
        @booking.guest_id = current_user.id
        if @booking.save
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update 
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages
        end
    end

    def destroy 
        @booking = Booking.find(params[:id])
        if @booking.destroy 
             @bookings = if params[:user_id]
                Booking.includes(:spot).where(guest_id: params[:user_id])
              else
               Booking.includes(:spot).all
              end
            render :index
        else 
            render json: ["Booking doesn't exist"], status: 401
        end
    end

    private

    def booking_params
        params.require(:booking).permit(:start_date, :end_date, :spot_id, :guest_id, :num_guests)
    end
end