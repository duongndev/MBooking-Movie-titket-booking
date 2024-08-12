package com.duongnd.mbookingapp.ui.adapter

import android.content.Context
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.data.model.MovieModel

class ComingSoonAdapter(
    private val moviesList: MutableList<MovieModel>,
    private val context: Context
) : RecyclerView.Adapter<ComingSoonAdapter.NowPlayingViewHolder>() {
    class NowPlayingViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val movieTitle: TextView = itemView.findViewById(R.id.txt_title_movie_coming_soon)
        val movieDesc: TextView = itemView.findViewById(R.id.txt_generic_movie_coming_soon)
        val moviePoster: ImageView = itemView.findViewById(R.id.img_poster_movie_coming_soon)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NowPlayingViewHolder {
        val itemView = View.inflate(parent.context, R.layout.item_layout_coming_soon, null)
        return NowPlayingViewHolder(itemView)
    }

    override fun getItemCount() = moviesList.size

    override fun onBindViewHolder(holder: NowPlayingViewHolder, position: Int) {
        val movie = moviesList[position]
        holder.movieTitle.text = movie.title
        holder.movieDesc.text = movie.description
        Glide.with(context)
            .load(movie.posterPath)
            .into(holder.moviePoster)
    }
}