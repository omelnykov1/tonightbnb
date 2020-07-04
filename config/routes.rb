Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :show] do 
      resources :bookings, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :spots, only: [:index, :show, :create, :update]
    resources :bookings, only: [:create, :show, :update, :destroy]
    resources :reviews, only: [:create, :index]
    get '/search', to: 'spots#search'
  end
end
