
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

question_groups = QuestionGroup.create([
	{order: 1, topic: 'Trans status'},
	{order: 2, topic: 'Citizenship'},
	{order: 3, topic: 'Birth country'},
	{order: 4, topic: 'Age'},
	{order: 5, topic: 'Passport'},
	{order: 6, topic: 'Not Trans'},
	{order: 7, topic: 'Not Citizen'},
])

answers = Answer.create([
	{question_group_id: 1, answer_text: "I identify as transgender and I would like to apply for a passport with my correct gender and name.", next_question_id: 2, answer_type: 'button'},
	{question_group_id: 1, answer_text: "I identify as transgender and I would like to apply for a passport with my correct name, but I do not need to change the gender.", next_question_id: 2, answer_type: 'button'},
	{question_group_id: 1, answer_text: "I am not transgender but I do need a passport.", next_question_id: 6, answer_type: 'button'},

	{question_group_id: 2, answer_text: "I am a US citizen.", next_question_id: 3, answer_type: 'button'},
	{question_group_id: 2, answer_text: "I am not US citizen.", next_question_id: 7, answer_type: 'button'},

	{question_group_id: 3, answer_text: "I was born in the United States.", next_question_id: 4, answer_type: 'button'},
	{question_group_id: 3, answer_text: "I was not born in the United States.", next_question_id: 4, answer_type: 'button'},

	# {question_group_id: 1, answer_text: "", next_question_id: "", answer_type: 'button'},
	# {question_group_id: 1, answer_text: "", next_question_id: "", answer_type: 'button'},
	# {question_group_id: 1, answer_text: "", next_question_id: "", answer_type: 'button'},
	# {question_group_id: 1, answer_text: "", next_question_id: "", answer_type: 'button'},
	{question_group_id: 6, answer_text: "This tool is specifically for transgender Americans. Please visit the <a href='https://travel.state.gov/content/passports/en/passports/apply.html'>State Department website</a> for more information about getting a passport.", answer_type: 'text'},
	{question_group_id: 7, answer_text: "This tool is specifically for transgender Americans. Please visit the <a href='https://www.uscis.gov/citizenship/learners/apply-citizenship'>USCIS website</a> for more information about becoming a US citizen.", next_question_id: "", answer_type: 'button'}
])
