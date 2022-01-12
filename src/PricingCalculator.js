import { useState } from 'react';
import { 
  Container,
  VStack,
  HStack,
  Heading, 
  SimpleGrid, 
  GridItem, 
  Box,
  Text,
  Divider
} from '@chakra-ui/react';

import InputNumber from './components/InputNumber';

const ResultBox = ({ label, value }) => {
  return (
    <Box>
      <Text 
        fontWeight="bold" 
        fontSize="md"
        color="gray.600"
      >
        {label}
      </Text>

      <Text
        fontWeight="bold"
        color="gray.800"
        fontSize="2xl"
      >
        {value}
      </Text>
    </Box>
  )
}

const PricingCalculator = () => {
  const [values, setValues] = useState({ 
    productCost: '',
    sellCost: '',
    packageCost: '',
    shipmentCost: '',
    sellerCommission: '',
    recommendationCommission: '',
    taxesCost: '',
    productCount: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ 
      ...values, 
      [name]: value 
    });
  }

  return (
    <Container 
      maxW="container.lg" 
      bg="gray.50"
      p="24px"
      borderRadius="8px"
    >
      <VStack spacing="40px" align="flex-start">

        <Heading 
          as="h1"
          size="lg"
        >
          Análise de custo
        </Heading>

        <SimpleGrid 
          columns={2} 
          spacing="16px" 
          minW="full"
        >
          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Custo do produto" 
              value={values.productCost}
              placeholder="Custo do produto"
              name="productCost"
              addon="$"
              helperText="Equivale a R$200 por unidade"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Preço de venda" 
              value={values.sellCost}
              placeholder="Preço de venda"
              name="sellCost"
              addon="$"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Custo da embalagem" 
              value={values.packageCost}
              placeholder="Custo da embalagem"
              name="packageCost"
              addon="$"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Custo do transporte" 
              value={values.shipmentCost}
              placeholder="Custo do transporte"
              name="shipmentCost"
              addon="$"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Comissão do vendedor (%)" 
              value={values.sellerCommission}
              placeholder="Comissão do vendedor"
              name="sellerCommission"
              addon="%"
              addonSide="right"
              helperText="Equivale a R$0.20 por unidade"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Comissão da indicação (%)" 
              value={values.recommendationCommission}
              placeholder="Comissão da indicação"
              name="recommendationCommission"
              addon="%"
              addonSide="right"
              helperText="Equivale a R$0.20 por unidade"
            />
          </GridItem>

          <GridItem>
            <InputNumber
              onChange={handleChange} 
              label="Imposto" 
              value={values.taxesCost}
              placeholder="Custo do imposto"
              name="taxesCost"
              addon="$"
            />
          </GridItem>

          <GridItem>
            <VStack 
              h="100%"
              p="10px"
              bgColor="yellow.100"
              borderRadius="md"
              border="1px solid #F6E05E"
            >
              <InputNumber
                onChange={handleChange} 
                label="Cálculo de lucro"
                name="profitCalculation"
                addon="Unidades"
                addonSide="right"
                w="80px"
                bgColor="gray.50"
                borderWidth="1px"
                min={0}
                value={values.productCount}
                _addon={{ 
                  fontSize: 'sm', 
                  p: '4px',
                  bgColor: 'gray.100',
                  color: 'gray.600'
                }}
              />

              <Text color="gray.600" fontWeight="medium">
                lucro de &nbsp;
                <Text 
                  as="span" 
                  fontWeight="bold" 
                  fontSize="xl"
                  color="gray.700"
                >
                  R$360
                </Text> 
              </Text>
            </VStack>
          </GridItem>

        </SimpleGrid>

        <HStack minW="full" h="100px" spacing="16px">
          <HStack 
            spacing={8} 
            divider={<Divider height="80%"  bgColor="black" orientation="vertical" />}
            w="full" 
            bgColor="#BEE3F8"
            border="1px solid #63B3ED"
            borderRadius="4px"
            height="100%"
            p="0 20px"
          >
            <ResultBox 
              label="Custo total (unidade)"
              value="R$ 35"
            />

            <ResultBox 
              label="Porcentagem de lucro"
              value="50%"
            />
          </HStack>
        </HStack>

      </VStack>
    </Container>
  )
}

export default PricingCalculator;

/*

  Campos formulário:
  - Custo do produto *
  - Embalagem *
  - Transporte * 
  - Comissão do vendedor *  
  - Imposto * 
  - Cálculo de lucro (vendendo x quantidade)

  Exibir:
    - Custo total
    - Porcentagem de lucro
    - Cálculo de lucro dependendo da quantidade

 -
*/
