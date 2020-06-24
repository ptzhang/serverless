# serverless

npx create-react-app .

Cloud Infrastructure Deployment
https://www.serverless.com/
npm install -g serverless
serverless create --help
serverless create --template aws-nodejs --name my-test-project --path framework-demo
serverless invoke local -f hello
config credentials --provider aws --key AKIAZPWCPFWXX5CVSO7G --secret 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
serverless deploy -v
serverless invoke -f hello
serverless logs -f hello  
serverless deploy function -f hello
serverless remove -v
