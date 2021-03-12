import React, { createContext, ReactNode, useContext } from 'react'

type MobileDetectResponse = {
  isMobile: boolean
  isDesktop: boolean
  isAndroid: boolean
  isIos: boolean
  isSSR: boolean
}

const getMobileDetect = (
  userAgent: NavigatorID['userAgent'],
): MobileDetectResponse => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i))
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i))
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i))
  const isSSR = () => Boolean(userAgent.match(/SSR/i))
  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile: isMobile(),
    isDesktop: isDesktop(),
    isAndroid: isAndroid(),
    isIos: isIos(),
    isSSR: isSSR(),
  }
}

type DeviceDetectorProviderProps = {
  userAgent: string
  children: ReactNode
}

const DeviceDetectorContext = createContext({
  isMobile: false,
  isDesktop: false,
  isAndroid: false,
  isIos: false,
  isSSR: false,
})

export function DeviceDetectorProvider({
  userAgent,
  children,
}: DeviceDetectorProviderProps) {
  const value = getMobileDetect(userAgent)

  return (
    <DeviceDetectorContext.Provider value={value}>
      {children}
    </DeviceDetectorContext.Provider>
  )
}

export const useDeviceDetector = () => {
  return useContext(DeviceDetectorContext)
}
