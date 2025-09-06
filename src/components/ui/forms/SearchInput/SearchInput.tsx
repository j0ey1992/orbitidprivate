/* eslint-disable @eslint-react/hooks-extra/no-direct-set-state-in-use-effect */

'use client'

import { normalise } from '@ensdomains/ensjs/utils'
import { clsx } from 'clsx'
import { useState } from 'react'
import ui from '~/styles/ui.module.css'
import { SearchIcon } from '../../../shared/icons/index'
import styles from './SearchInput.module.css'

type CommonProps = {
  viewText: string
  invalidText: string
  registerText: string
}

const SearchButton = ({
  isLoading,
  name,
}: {
  isLoading: boolean
  name: string
}) => {
  if (isLoading) {
    return (
      <button
        type="button"
        disabled
        className={clsx(styles.icon, styles.spinner)}
      >
        <img src="/assets/spinner.svg" alt="loading" />
      </button>
    )
  }

  return (
    <button type="submit" className={styles.icon}>
      <SearchIcon />
    </button>
  )
}

export const SearchInput = ({
  caption,
  placeholder,
  viewText,
  registerText,
  invalidText,
}: {
  caption?: string
  placeholder: string
} & CommonProps) => {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div
      className={clsx(
        ui.flex,
        ui['flex-col'],
        ui['flex-center'],
        styles.container,
      )}
    >
      {caption && (
        <div className={styles.captionContainer}>
          <span className={styles.caption}>{caption}</span>
        </div>
      )}
      <div className={clsx(ui.flex, ui['flex-col'], styles.searchboxContainer)}>
        <form
          method="GET"
          onSubmit={(e) => {
            try {
              e.preventDefault()
              if (!e.currentTarget.reportValidity()) return

              const fd = new FormData(e.currentTarget)
              const rawName = fd.get('ens')?.toString().trim()
              if (!rawName) return

              const normalisedName = normalise(rawName)

              const name =
                normalisedName.lastIndexOf('.') !== -1
                  ? normalisedName
                  : `${normalisedName}.fox`

              // Redirect to OrbitID app profile/registration page
              location.assign(`https://app.orbitid.domains/name/${name}`)
            } catch (error) {
              console.error(error)
            }
          }}
          className={clsx(styles.inputContainer, 'plausible-event-name=search')}
        >
          <input
            onChange={(e) => setValue(e.currentTarget.value)}
            name="ens"
            value={value}
            className={styles.input}
            placeholder={placeholder}
            required
            minLength={2}
          />
          <SearchButton isLoading={isLoading} name={value} />
        </form>
      </div>
    </div>
  )
}
