class QuestionGroupSerializer < ActiveModel::Serializer
  attributes :order,
             :topic

  has_many :answers
end
