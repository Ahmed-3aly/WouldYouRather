import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from './_DATA.js'

class API_Client {
    static optionOne = 'optionOne'
    static optionTwo = 'optionTwo'
    static getAnswerId(s) {
        return s === this.optionOne ? 1 : 2;
    }
    static getAnswerText(s) {
        return s === 1 ? this.optionOne : this.optionTwo;
    }
    static pollAnswer(
        authUserId,
        pollId,
        answerId
    ) {
        return _saveQuestionAnswer({
            authedUser: authUserId,
            qid: pollId,
            answer: this.getAnswerText(answerId)
        })
    }
    static pollCreate(
        authorId,
        optionOneText,
        optionTwoText
    ) {
        return _saveQuestion({
            author: authorId,
            optionOneText: optionOneText,
            optionTwoText: optionTwoText
        })
    }
    static Init() {
        return Promise.all([
            _getUsers(),
            _getQuestions()
        ]).then(([x, y]) => {
            const users = Object.values(x);
            const Users = users.map(
                x => {
                    return {
                        Id: x.id,
                        Name: x.name
                    }
                }
            )
            //
            const polls = Object.values(y);
            const Polls = polls.map(
                x => {
                    return {
                        Id: x.id,
                        AuthorId: Users.find(z => z.Id === x.author).Id,
                        On: x.timestamp,
                        Answers: [
                            x.optionOne.text,
                            x.optionTwo.text,
                        ]
                    }
                }
            )
            //
            const Answers = []
            users.forEach(
                x => {
                    const keys = Object.keys(x.answers)
                    const vals = Object.values(x.answers)
                    keys.forEach(
                        (y, i) => {
                            Answers.push({
                                UserId: x.id,
                                PollId: y,
                                AnswerId: this.getAnswerId(vals[i])
                            })
                        }
                    )
                }
            )
            const result = {
                Users: Users,
                Polls: Polls,
                Answers: Answers,
            }
            return result;
        })
    }
}

export default API_Client
