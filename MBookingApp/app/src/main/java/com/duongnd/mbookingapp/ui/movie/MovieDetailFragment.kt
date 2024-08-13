package com.duongnd.mbookingapp.ui.movie

import android.content.Intent
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.duongnd.mbookingapp.R
import com.duongnd.mbookingapp.databinding.FragmentMovieDetailBinding

class MovieDetailFragment : Fragment() {

    private var _binding: FragmentMovieDetailBinding? = null
    private val binding get() = _binding!!

    private var isTextExpanded = false

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentMovieDetailBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.txtSeeMoreMovieDetail.setOnClickListener {
            toggleText()
        }
        val videoUrl = "https://res.cloudinary.com/dsukseqnu/video/upload/v1723022298/Movie/Movies/Trailer/urmcvaqdwzus7o50fpus.mp4"
        binding.btnWatchTrailerMovieDetail.setOnClickListener {
            val intent = Intent(requireActivity(), VideoTrailerActivity::class.java)
            intent.putExtra("VIDEO_URL", videoUrl)
            startActivity(intent)
        }
    }

    private fun toggleText() {
        if (isTextExpanded){
            binding.txtDescMovieDetail.maxLines = 5
            binding.txtDescMovieDetail.ellipsize = android.text.TextUtils.TruncateAt.END
            binding.txtSeeMoreMovieDetail.text = "See more"
        } else{
            binding.txtDescMovieDetail.maxLines = Int.MAX_VALUE
            binding.txtDescMovieDetail.ellipsize = null
            binding.txtSeeMoreMovieDetail.text = "See less"
        }

        isTextExpanded = !isTextExpanded
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}