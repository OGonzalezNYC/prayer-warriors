class PrayerSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :amens, :outcome, :user_id
end
