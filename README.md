# app

Workflow build công khai cho fork [hungthai1401/paseo](https://github.com/hungthai1401/paseo). Mã nguồn không nằm ở đây. Job checkout repo private bằng secret `PASEO_CHECKOUT_TOKEN`.

Release nằm trên repo này. Runner chuẩn của repo public không trừ phút Actions.

## Secret

Trên repo này, `PASEO_CHECKOUT_TOKEN`: fine-grained PAT, chỉ Contents: Read trên `hungthai1401/paseo`.

Trên repo private, `APP_DISPATCH_TOKEN`: fine-grained PAT, Contents: Read and write trên repo `app` này. Tag `v*` dùng token đó để gọi `repository_dispatch`.

Workflow chỉ chạy bằng tag, `workflow_dispatch`, hoặc `repository_dispatch`. Không có `pull_request`.

## Chạy

```bash
gh workflow run app-release.yml --repo hungthai1401/app -f ref=v0.13.0-1 -f platforms=all
```

`platforms`: `ios`, `android`, `mobile`, `macos`, `windows`, `desktop`, `all`. `windows` chỉ dựng lại lát arm64.

`all` gồm IPA, APK arm64, và desktop cho macOS, Linux, Windows. Mỗi hệ có bản x64 và arm64. Linux ra AppImage, deb, rpm, tar.gz. Windows ra NSIS và zip. Windows x64 chạy trên `windows-2022`, Windows arm64 trên `windows-11-arm`. iOS chạy trên `macos-26`, Xcode 26.4 trở lên. APK chỉ có `arm64-v8a`.

Tên file là `Paseo-<version>-<arch>.<đuôi>` (`Paseo-0.13.0-1-arm64.dmg`, `Paseo-0.13.0-1-x64.exe`). APK và IPA không có arch: `Paseo-0.13.0-1.apk`. `deb`, `rpm` và AppImage giữ tên arch của định dạng (`amd64`, `arm64`, `x86_64`, `aarch64`).
