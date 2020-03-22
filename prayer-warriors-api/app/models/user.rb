class User < ApplicationRecord
  #validates :username, presence: true
  validates :username, uniqueness: true
    # { case_sensitive: false }
  has_many :prayers
end
