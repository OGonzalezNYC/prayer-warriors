class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :verse, :prayers
end
