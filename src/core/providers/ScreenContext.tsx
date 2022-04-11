import React, { useState, useContext, useCallback, useEffect } from 'react'
import { useMediaQuery, Context as ResponsiveContext } from 'react-responsive'

import { getBreakPoints } from '@core/styles/helpers'

const SIZE_POINT_BY_BREAKPOINT = {
  xs: 1,
  sm: 3,
  md: 5,
  lg: 7,
  xl: 11,
  xl2: 13,
  xl3: 17
}

const ScreenContext = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('')
  const [sizePoint, setSizePoint] = useState(0)

  const xs = useMediaQuery({ maxWidth: getBreakPoints('sm') - 1 }) // 1

  // 3
  const sm = useMediaQuery({
    minWidth: getBreakPoints('sm'),
    maxWidth: getBreakPoints('md') - 1
  })

  // 5
  const md = useMediaQuery({
    minWidth: getBreakPoints('md'),
    maxWidth: getBreakPoints('lg') - 1
  })

  // 7
  const lg = useMediaQuery({
    minWidth: getBreakPoints('lg'),
    maxWidth: getBreakPoints('xl') - 1
  })

  // 11
  const xl = useMediaQuery({
    minWidth: getBreakPoints('xl'),
    maxWidth: getBreakPoints('xl2') - 1
  })

  // 13
  const xl2 = useMediaQuery({
    minWidth: getBreakPoints('xl2'),
    maxWidth: getBreakPoints('xl3') - 1
  })

  // 17
  const xl3 = useMediaQuery({ minWidth: getBreakPoints('xl3') })

  // Update vh
  useEffect(() => {
    const updateScreenHeight = () => {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      const vh = window.innerHeight * 0.01
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', updateScreenHeight)
    updateScreenHeight()

    return () => {
      window.removeEventListener('resize', updateScreenHeight)
    }
  }, [])

  useEffect(() => {
    let currentScreen = 'xs'
    let sizePoint = SIZE_POINT_BY_BREAKPOINT.xs

    if (sm) {
      currentScreen = 'sm'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.sm
    }

    if (md) {
      currentScreen = 'md'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.md
    }

    if (lg) {
      currentScreen = 'lg'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.lg
    }

    if (xl) {
      currentScreen = 'xl'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl
    }

    if (xl2) {
      currentScreen = 'xl2'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl2
    }

    if (xl3) {
      currentScreen = 'xl3'
      sizePoint = SIZE_POINT_BY_BREAKPOINT.xl3
    }

    setCurrentScreen(currentScreen)
    setSizePoint(sizePoint)
  }, [lg, md, sm, xl, xl2, xl3])

  const minimumScreen = useCallback(
    (type = 'md') => {
      return SIZE_POINT_BY_BREAKPOINT?.[type] <= sizePoint
    },
    [sizePoint]
  )

  const maximumScreen = useCallback(
    (type = 'md') => {
      return SIZE_POINT_BY_BREAKPOINT?.[type] >= sizePoint
    },
    [sizePoint]
  )

  return (
    <ResponsiveContext.Provider value={{}}>
      {children}
    </ResponsiveContext.Provider>
  )
}

const useScreen = () => {
  return useContext(ResponsiveContext)
}

export { ScreenContext as default, useScreen }
