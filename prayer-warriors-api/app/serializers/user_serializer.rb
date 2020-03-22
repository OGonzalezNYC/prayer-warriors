class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :prayers
end
