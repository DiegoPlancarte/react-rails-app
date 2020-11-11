Rails.application.routes.draw do
  resources :favorite_blogs
  resources :projects
  resources :blogs
  devise_for :users, path: '', path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register', edit: 'edit_my_account' }
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root to: 'home#index'
end
