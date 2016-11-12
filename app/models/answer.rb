class Answer < ApplicationRecord
	validates :answer_text, presence: true
	validates :question_group_id, presence: true
	validates :answer_type, presence: true

	belongs_to :question_group, primary_key: :id, foreign_key: :question_group_id
end
