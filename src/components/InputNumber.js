import { 
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Input,
  FormHelperText
} from '@chakra-ui/react';

const InputNumber = ({ 
  label, 
  placeholder, 
  name, 
  addon, 
  addonSide = 'left', 
  helperText,
  _addon,
  value,
  ...props
}) => {
  return (
    <FormControl fontWeight="bold" w="inherit">

      <FormLabel 
        htmlFor={name} 
        color="gray.600"
        fontWeight="bold"
      >
        {label}
      </FormLabel>

      <InputGroup>
        {addonSide === 'left' &&
          <InputLeftAddon
            children={addon}
            bgColor="gray.200"
            color="gray.500"
            {..._addon}
          />
        }
        
        <Input 
          id={name} 
          name={name}
          type="number"
          value={value}
          min={0}
          step="0.01"

          fontWeight="bold" 
          borderColor="gray.300"
          borderWidth="2px"
          placeholder={placeholder}
          _placeholder={{ fontWeight: 'normal' }}
          {...props}
        />  

        {addonSide === 'right' &&
          <InputRightAddon
            children={addon}
            bgColor="gray.200"
            color="gray.500"
            {..._addon}
          />
        } 
      </InputGroup>

      {helperText && 
        <FormHelperText>
          {helperText}
        </FormHelperText>
      }
    </FormControl>
  )
}

export default InputNumber;
