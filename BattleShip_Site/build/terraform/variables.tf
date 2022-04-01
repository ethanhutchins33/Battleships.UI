#define variables

variable "ARM_SUBSCRIPTION_ID" {
  type = string
  description = "Azure Subcription ID to use for authenticating terraform while running in build pipeline"
}

variable "ARM_CLIENT_ID" {
  type = string
  description = "Azure Client ID to use for authenticating terraform while running in build pipeline"
}

variable "ARM_CLIENT_SECRET" {
  type = string
  description = "Azure Client Secret to use for authenticating terraform while running in build pipeline"
}

variable "ARM_TENANT_ID" {
  type = string
  description = "Azure Tenant ID of the Service Principle to use for authenticating terraform while running in build pipeline"
}
