package com.duongnd.mbookingapp.data.model

data class MovieModel (
    val id: Int,
    val title: String,
    val duration: String,
    val description: String,
    val rating: String,
    val posterPath: String,
    val director: List<String>,
    val actors: List<String>,
    val genre: String,
    val releaseDate: String,
    val language: String,
    val country: String,
    val censorship: String
)