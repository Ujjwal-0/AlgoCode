const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
        try {
            //1. Sanitize the markdown for description.
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log("problem data", problemData);
            const problem = await this.problemRepository.createProblem(problemData);
            console.log("problem created", problem);
            return problem;
        } catch (error) {
            console.log(error);
        }
        
        
    }
}

module.exports = ProblemService