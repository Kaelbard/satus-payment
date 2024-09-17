'use client'

import { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Checkbox } from "../components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "../components/ui/ratio-group"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../components/ui/card"

export default function PaymentForm() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [totalAmount, setTotalAmount] = useState(0)

  const handleProductSelect = (product: string, price: number) => {
    setSelectedProducts(prev => 
      prev.includes(product) 
        ? prev.filter(p => p !== product)
        : [...prev, product]
    )
    setTotalAmount(prev => 
      prev + (selectedProducts.includes(product) ? -price : price)
    )
  }

  return (
    <Card className="w-80 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Sistema de pagamento - Satus</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="company">Empresa</Label>
          <Select>
            <SelectTrigger id="company">
              <SelectValue placeholder="Selecione a empresa" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="company1">Empresa 1</SelectItem>
              <SelectItem value="company2">Empresa 2</SelectItem>
              <SelectItem value="company3">Empresa 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="client">Cliente</Label>
          <div className="flex space-x-2">
            <Input id="client" placeholder="Procurar por cliente" className="flex-grow" />
            <Button variant="outline">Adicionar Novo</Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cpf-cnpj">CPF/CNPJ</Label>
          <Input id="cpf-cnpj" placeholder="Digite CPF ou CNPJ" />
        </div>

        <div className="space-y-2">
          <Label>Tipo de serviço</Label>
          <RadioGroup defaultValue="installments" className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="installments" id="installments" />
              <Label htmlFor="installments">Parcelas</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="subscription" id="subscription" />
              <Label htmlFor="subscription">Assinatura</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Produtos</Label>
          <div className="grid grid-cols-2 gap-4">
            {['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4'].map((product, index) => (
              <div key={product} className="flex items-center space-x-2">
                <Checkbox 
                  id={`product-${index}`} 
                  onCheckedChange={() => handleProductSelect(product, 100)}
                />
                <Label htmlFor={`product-${index}`}>{product}</Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Total</Label>
          <Input id="amount" value={`R$ ${totalAmount.toFixed(2)}`} readOnly className="font-bold" />
        </div>

        <div className="space-y-2">
          <Label>Metodo de Pagamento</Label>
          <RadioGroup defaultValue="pix" className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="pix" id="pix" />
              <Label htmlFor="pix">Pix</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="boleto" id="boleto" />
              <Label htmlFor="boleto">Boleto</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card">Cartão</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Pagar</Button>
      </CardFooter>
    </Card>
  )
}