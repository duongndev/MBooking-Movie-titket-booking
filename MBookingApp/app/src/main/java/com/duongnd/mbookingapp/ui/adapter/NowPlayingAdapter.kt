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

class NowPlayingAdapter(
    private val moviesList: List<MovieModel>,
    private val context: Context
) : RecyclerView.Adapter<NowPlayingAdapter.NowPlayingViewHolder>() {
    class NowPlayingViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val movieTitle: TextView = itemView.findViewById(R.id.txt_title_movie_now_playing)
        val movieDuration: TextView = itemView.findViewById(R.id.txt_duration_movie_now_playing)
        val movieDesc: TextView = itemView.findViewById(R.id.txt_desc_movie_now_playing)
        val movieRating: TextView = itemView.findViewById(R.id.txt_rating_movie_now_playing)
        val moviePoster: ImageView = itemView.findViewById(R.id.image_view_now_playing)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): NowPlayingViewHolder {
        val itemView = View.inflate(parent.context, R.layout.item_layout_now_playing, null)
        itemView.layoutParams = ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT)
        return NowPlayingViewHolder(itemView)
    }

    override fun getItemCount() = moviesList.size

    override fun onBindViewHolder(holder: NowPlayingViewHolder, position: Int) {
        val movie = moviesList[position]
        holder.movieTitle.text = movie.title
        holder.movieDuration.text = movie.duration
        holder.movieDesc.text = movie.genre
        holder.movieRating.text = movie.rating

        Glide.with(context)
            .load(movie.posterPath)
            .into(holder.moviePoster)

        holder.itemView.setOnClickListener {
            clickToDetail?.invoke(movie)
        }

    }

    var clickToDetail: ((MovieModel) -> Unit)? = null
}