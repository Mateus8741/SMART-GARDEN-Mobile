import React from 'react';
import { Container, ContentButton, IconButton, Label, Loading } from './styles';
import { colorPrimary, colorWhite } from '../../UI/variaveis';

export default function Button({
  children,
  iconName,
  color,
  labelColor,
  outline,
  isLoading = false,
  disabled = false,
  ...rest
}) {
  return (
    <Container
      color={color}
      outline={outline}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading color={labelColor || colorWhite} />
      ) : (
        <ContentButton>
          {iconName && <IconButton name={iconName} />}
          <Label color={outline ? color || colorPrimary : labelColor}>
            {children}
          </Label>
        </ContentButton>
      )}
    </Container>
  );
}
