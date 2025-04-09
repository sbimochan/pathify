# pathify

> Generate dot-notated key paths from deeply nested JavaScript objects — clean, recursive, and zero dependencies.

---

## ✨ Features

- 🔁 Recursively walks any nested object
- 📌 Replaces all leaf values with their full dot-notation paths
- 🧼 Preserves original object structure
- 🪶 Lightweight — no dependencies
- ⚙️ Optional base path prefix

---

## 📦 Install

```bash
npm install @sbimochan/pathify
```

## Test

```bash
npm run test
```

## Usage

```javascript
const input = {
  user: {
    profile: {
      name: '',
      age: ''
    },
    settings: {
      theme: ''
    }
  }
};
```

### Expected output

```javascript
{
  user: {
    profile: {
      name: 'user.profile.name',
      age: 'user.profile.age'
    },
    settings: {
      theme: 'user.settings.theme'
    }
  }
}
```

