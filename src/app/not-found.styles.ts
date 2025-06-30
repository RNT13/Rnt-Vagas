'use client'

import { media } from '@/styles/theme'
import Image from 'next/image'
import styled from 'styled-components'

export const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 24px;

  ${(media.sm, media.md)} {
    padding: 0px;
  }
`

export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px 0;
`

export const NotFoundImage = styled(Image)`
  width: 600px;
  height: 600px;
  object-fit: cover;

  ${(media.sm, media.md)} {
    width: 100%;
    height: auto;
  }
`
