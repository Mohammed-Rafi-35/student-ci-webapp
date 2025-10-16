# CI/CD: Dockerized Web App → EC2

## Summary
Small demo: Node.js app built into Docker image, pushed to ECR, deployed to EC2 by GitHub Actions.

## Demo flow
1. Make change locally
2. Push to GitHub main
3. GitHub Actions builds image → pushes to ECR → SSH to EC2 → pulls & runs

## How to run locally
1. `docker build -t ccw-demo:local .`
2. `docker run -p 8080:8080 ccw-demo:local`
3. Visit http://localhost:8080

## AWS resources created
- EC2: ccw-ec2-app-01 (t2.micro)
- ECR: ccw-ecr-repo
- Security Group: ccw-sg-ssh-http
- IAM user for CI: ccw-ci-user

## Cleanup
1. Stop EC2 instance: EC2 > Instances > Stop
2. Delete ECR images: ECR > Repositories > ccw-ecr-repo > Delete images
