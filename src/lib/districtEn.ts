export function getDistrictEn(district: string | null | undefined): string | null {
  if (!district) return null;
  const m = district.match(/^([IVXLC]+)\. kerület$/);
  return m ? `District ${m[1]}` : district;
}
