terraform {
  backend "azurerm" {
    resource_group_name="battleships-rg"
    storage_account_name="ehbsstorage"
    container_name="terraform-blob"
    key="terraform.tfstate"
    access_key = "ylmjkYdMh5MQAM+gqtrZ2d+QWRgDsuxii/IXQ8Ue1mD24tO34sRpYxojZSuNGk0Y1wX9c1QTPLuf8Qa29KbQDQ=="
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = var.ARM_SUBSCRIPTION_ID
  tenant_id = var.ARM_TENANT_ID
  client_id = var.ARM_CLIENT_ID
  client_secret = var.ARM_CLIENT_SECRET
}