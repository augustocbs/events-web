import { Typography, TypographyProps, styled } from '@mui/material'

export const Label = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: '.2rem',
  fontSize: '0.75rem',
  color: theme.palette.text.primary
}))
