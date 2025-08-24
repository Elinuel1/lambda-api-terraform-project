# 🚀 Serverless API on AWS with Terraform

This project demonstrates how to deploy a simple **serverless API** using **AWS Lambda** and **API Gateway**, all managed with **Terraform** as Infrastructure as Code (IaC).

The Lambda function is written in Python and returns a simple "Hello, World!" response. The API Gateway exposes this function via an HTTP endpoint, making it accessible from anywhere.

---

## 🛠️ Technologies Used
- **AWS Lambda** – serverless compute service
- **AWS API Gateway (v2)** – exposes the Lambda as a REST API
- **Terraform** – infrastructure as code for provisioning AWS resources
- **Python** – simple Lambda function handler