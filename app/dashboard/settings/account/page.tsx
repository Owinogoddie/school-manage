// app/settings/account/page.tsx

import ContentSection from '../_components/content-section'
import { AccountForm } from './account-form'

export default function SettingsAccount() {
  return (
    <ContentSection
      title='Account'
      desc='Update your account settings. Set your preferred language and timezone.'
    >
      <AccountForm />
    </ContentSection>
  )
}
