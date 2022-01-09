import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement; // ReactElement needs to be a React Component !== ReactNode can be any type of object/property
  shouldMatchExactHref: boolean;
}

export function ActiveLink({ children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false;

  if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (!shouldMatchExactHref && (asPath.startsWith(String(rest.href)) ||
    asPath.startsWith(String(rest.href)))) {
      isActive = true;
    }


  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}