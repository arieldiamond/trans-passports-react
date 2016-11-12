class QuestionGroup < ApplicationRecord
	validates :topic, presence: true, uniqueness: true
	validates :order, presence: true, uniqueness: true

	has_many :answers, primary_key: :id, foreign_key: :question_group_id
end
