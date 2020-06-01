class User < ApplicationRecord
    validates :name, :session_token, :password_digest, presence: true 
    validates :email, presence: true, uniqueness: true
    validates :password, lenght: {minimum: 6, allow_nil: true}

    attr_reader :password 
    after_initialize :ensure_session_token

    #has_many :spots
    #has_many :bookings
    #has_many :reviews


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token!
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.update!(session_token: self.class.generate_session_token!)
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token!
  end

end
