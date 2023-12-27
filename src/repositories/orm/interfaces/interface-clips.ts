interface IntCLip {
  url: string
  embed_url: string
  broadcaster_id: string
  broadcaster_name: string
  creator_id: string
  creator_name: string
  video_id: string
  game_id: string
  language: string
  title: string
  view_count: number
  created_at: string
  thumbnail_url: string
  duration: number
  vod_offset: null | number
  is_featured: boolean
}

export interface IntClipsRepository {
  SaveClip(data: IntCLip): Promise<void>
  DeleteClip(broadcasterID: string): Promise<void>

}
