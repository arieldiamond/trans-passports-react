class AnswerSerializer < ActiveModel::Serializer
  attributes :question_group_id,
             :answer_text,
             :next_question_id,
             :answer_type
end
