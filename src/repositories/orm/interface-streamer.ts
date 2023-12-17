export interface IntStreamer {
  id: string
  broadcaster_id: string
  broadcaster_name: string
  type: string
  avatar: string
  viewCount: number
  star: boolean
  display_name: string
  broadcaster_type: string
  created_at: string
}

export interface IntAddStreamer {
  broadcasterID: string
  broadcasterName: string
  displayName: string
  type: string
  avatar: string
  broadcasterType: string
  viewCount: number
  createdAt: string
  star: false
}

export interface IntStreamerRepository {
  findUniqueBroadcasterID(broadcasterID: string): Promise<IntStreamer | null>
  Create({ broadcasterID, broadcasterName, displayName, type, avatar, broadcasterType, viewCount, createdAt, star }: IntAddStreamer): Promise<{
    id: string
    broadcaster_id: string
    broadcaster_name: string
    type: string
    avatar: string
    viewCount: number
    star: boolean
    display_name: string
    broadcaster_type: string
    created_at: string
  }>
  Delete(broadcasterID: string): Promise<void>
  Favorite(broadcasterID: string, star: boolean): Promise<IntStreamer | null>
}
