provider "azurerm" {
  features {}
  client_id = var.spn-client-id
  client_secret = var.spn-client-id
  tenant_id = var.spn-tenant-id
}