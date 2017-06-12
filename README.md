# location-china

## Province

### toShort

```typescript
public toShort() {
  // 如果是自治区，只取前两个字
  if (this.name.indexOf('自治区') !== -1) {
    return this.name.substr(0, 2)
  }

  // remove 省 | 市
  return this.name.replace(/[(\u7701)|(\u5E02)]/g, '')
}
```
