terraform {
  backend "azurerm" {
    
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }

  required_version = ">= 1.1.0"
}

provider "azurerm" {
  features {}

  subscription_id = ARM_SUBSCRIPTION_ID
  tenant_id = ARM_TENANT_ID
  client_id = ARM_CLIENT_ID
  client_secret = ARM_CLIENT_SECRET
}