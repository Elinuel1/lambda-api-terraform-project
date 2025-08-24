variable "region" {
  description = "AWS region to deploy CloudFront+S3 (note: CloudFront is global)"
  type        = string
  default     = "eu-north-1"
}

variable "project_name" {
  description = "Name prefix for resources"
  type        = string
  default     = "serverless-webapp"
}